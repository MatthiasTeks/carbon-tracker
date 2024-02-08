import db from '../db';
import ActivityEntryService from '../services/activity-entry-service';
import CategoryService from '../services/category-service';
import UserService from '../services/user-service';

export default async function resetDB() {
  const runner = db.createQueryRunner();
  await runner.query("SET session_replication_role = 'replica'");
  await Promise.all(
    db.entityMetadatas.map(async (entity) =>
      runner.query(`ALTER TABLE "${entity.tableName}" DISABLE TRIGGER ALL`),
    ),
  );
  await Promise.all(
    db.entityMetadatas.map(async (entity) =>
      runner.query(`DROP TABLE IF EXISTS "${entity.tableName}" CASCADE`),
    ),
  );
  await runner.query("SET session_replication_role = 'origin'");
  await db.synchronize();
}

async function main() {
  await db.initialize();
  await resetDB();

  const user1 = UserService.create({
    email: 'carbon-tracker@support.fr',
    password: 'carbonpassword',
  });

  const category1 = CategoryService.create({
    name: 'Transport',
  });
  const category2 = CategoryService.create({
    name: 'Alimentation',
  });

  await ActivityEntryService.create({
    name: 'Ma dépense carbone voiture',
    input: 'blablabla',
    category: await category1,
    user: await user1,
  });

  await ActivityEntryService.create({
    name: 'Ma dépense carbone repas',
    input: 'patatipatata',
    category: await category2,
    user: await user1,
  });

  await db.destroy();
  console.info('♻️ Database successfully reset!');
}

main();

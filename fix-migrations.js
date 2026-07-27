const fs = require('fs');
const path = require('path');

const migrationsDir = path.join(__dirname, 'migrations');
const files = fs.readdirSync(migrationsDir);

const replacements = {
  'create-document': [
    {
      target: /userId:\s*{\s*type:\s*Sequelize\.INTEGER\s*}/g,
      replace: "userId: {\n        type: Sequelize.INTEGER,\n        references: { model: 'Users', key: 'id' },\n        onUpdate: 'CASCADE',\n        onDelete: 'CASCADE'\n      }"
    },
    {
      target: /templateId:\s*{\s*type:\s*Sequelize\.INTEGER\s*}/g,
      replace: "templateId: {\n        type: Sequelize.INTEGER,\n        references: { model: 'Templates', key: 'id' },\n        onUpdate: 'CASCADE',\n        onDelete: 'SET NULL'\n      }"
    }
  ],
  'create-section': [
    {
      target: /documentId:\s*{\s*type:\s*Sequelize\.INTEGER\s*}/g,
      replace: "documentId: {\n        type: Sequelize.INTEGER,\n        references: { model: 'Documents', key: 'id' },\n        onUpdate: 'CASCADE',\n        onDelete: 'CASCADE'\n      }"
    }
  ],
  'create-item': [
    {
      target: /sectionId:\s*{\s*type:\s*Sequelize\.INTEGER\s*}/g,
      replace: "sectionId: {\n        type: Sequelize.INTEGER,\n        references: { model: 'Sections', key: 'id' },\n        onUpdate: 'CASCADE',\n        onDelete: 'CASCADE'\n      }"
    }
  ],
  'create-version': [
    {
      target: /documentId:\s*{\s*type:\s*Sequelize\.INTEGER\s*}/g,
      replace: "documentId: {\n        type: Sequelize.INTEGER,\n        references: { model: 'Documents', key: 'id' },\n        onUpdate: 'CASCADE',\n        onDelete: 'CASCADE'\n      }"
    }
  ],
  'create-application': [
    {
      target: /userId:\s*{\s*type:\s*Sequelize\.INTEGER\s*}/g,
      replace: "userId: {\n        type: Sequelize.INTEGER,\n        references: { model: 'Users', key: 'id' },\n        onUpdate: 'CASCADE',\n        onDelete: 'CASCADE'\n      }"
    },
    {
      target: /documentId:\s*{\s*type:\s*Sequelize\.INTEGER\s*}/g,
      replace: "documentId: {\n        type: Sequelize.INTEGER,\n        references: { model: 'Documents', key: 'id' },\n        onUpdate: 'CASCADE',\n        onDelete: 'CASCADE'\n      }"
    }
  ],
  'create-share': [
    {
      target: /documentId:\s*{\s*type:\s*Sequelize\.INTEGER\s*}/g,
      replace: "documentId: {\n        type: Sequelize.INTEGER,\n        references: { model: 'Documents', key: 'id' },\n        onUpdate: 'CASCADE',\n        onDelete: 'CASCADE'\n      }"
    }
  ],
  'create-export': [
    {
      target: /userId:\s*{\s*type:\s*Sequelize\.INTEGER\s*}/g,
      replace: "userId: {\n        type: Sequelize.INTEGER,\n        references: { model: 'Users', key: 'id' },\n        onUpdate: 'CASCADE',\n        onDelete: 'CASCADE'\n      }"
    },
    {
      target: /documentId:\s*{\s*type:\s*Sequelize\.INTEGER\s*}/g,
      replace: "documentId: {\n        type: Sequelize.INTEGER,\n        references: { model: 'Documents', key: 'id' },\n        onUpdate: 'CASCADE',\n        onDelete: 'CASCADE'\n      }"
    }
  ]
};

for (const file of files) {
  for (const [key, rules] of Object.entries(replacements)) {
    if (file.includes(key)) {
      const filePath = path.join(migrationsDir, file);
      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;
      for (const rule of rules) {
        if (rule.target.test(content)) {
          content = content.replace(rule.target, rule.replace);
          modified = true;
        }
      }
      if (modified) {
        fs.writeFileSync(filePath, content);
        console.log(`Updated ${file}`);
      }
    }
  }
}

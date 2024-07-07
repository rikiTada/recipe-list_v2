-- CreateTable
DROP TABLE IF EXISTS User;
CREATE TABLE IF NOT EXISTS "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "avatar" TEXT,
    "username" TEXT NOT NULL,
    "full_name" TEXT NOT NULL,
    "full_name_kana" TEXT NOT NULL,
    "email" TEXT,
    "password" TEXT NOT NULL,
    "is_admin" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

INSERT INTO
  User (id, username, full_name, full_name_kana, email, password)
VALUES
	('1','a', 'a', 'a', 'hoge@example.com', 'password');


--  npx wrangler d1 execute recipe-list --file=./prisma/migrations/0001_creat
-- e_user_table.sql --remote
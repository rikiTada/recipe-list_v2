-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "avatar" TEXT,
    "username" TEXT NOT NULL,
    "email" TEXT,
    "is_admin" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "shopping_list" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "type_id" TEXT,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "is_purchased" BOOLEAN NOT NULL DEFAULT false,
    "user_id" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "shopping_list_type_id_fkey" FOREIGN KEY ("type_id") REFERENCES "shopping_list_type" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "shopping_list_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "shopping_list_type" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "type" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE INDEX "user_id_idx" ON "user"("id");

-- CreateIndex
CREATE INDEX "shopping_list_id_idx" ON "shopping_list"("id");

-- CreateIndex
CREATE INDEX "shopping_list_type_type_idx" ON "shopping_list_type"("type");


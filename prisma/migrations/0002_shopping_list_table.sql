-- CreateTable
DROP TABLE IF EXISTS shopping_list;
CREATE TABLE IF NOT EXISTS "shopping_list" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "type" TEXT,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "is_purchased" BOOLEAN NOT NULL DEFAULT false,
    "user_id" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "shopping_list_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE INDEX "shopping_list_id_idx" ON "shopping_list"("id");

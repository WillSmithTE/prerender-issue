-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ClothesItem" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imageUri" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "ClothesItem_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_ClothesItem" ("color", "description", "id", "imageUri", "summary", "userId") SELECT "color", "description", "id", "imageUri", "summary", "userId" FROM "ClothesItem";
DROP TABLE "ClothesItem";
ALTER TABLE "new_ClothesItem" RENAME TO "ClothesItem";
CREATE UNIQUE INDEX "ClothesItem_userId_imageUri_key" ON "ClothesItem"("userId", "imageUri");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

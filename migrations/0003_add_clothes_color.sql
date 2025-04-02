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
    CONSTRAINT "ClothesItem_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
DROP TABLE "ClothesItem";
ALTER TABLE "new_ClothesItem" RENAME TO "ClothesItem";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateTable
CREATE TABLE `Pokedex` (
    `pokedex_id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `pokedex_no` INTEGER NOT NULL,

    PRIMARY KEY (`pokedex_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE "account" (
    "id" INTEGER NOT NULL,
    "name" TEXT,
    "email" TEXT NOT NULL,

    CONSTRAINT "account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "order" (
    "id" INTEGER NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "account_id" INTEGER NOT NULL,
    "status_id" INTEGER,

    CONSTRAINT "order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "status" (
    "id" INTEGER NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "status_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "accounts_index_0" ON "account"("id");

-- CreateIndex
CREATE INDEX "orders_index_0" ON "order"("id");

-- CreateIndex
CREATE INDEX "status_index_0" ON "status"("id");

-- AddForeignKey
ALTER TABLE "order" ADD CONSTRAINT "order_account_id_fkey" FOREIGN KEY ("account_id") REFERENCES "account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order" ADD CONSTRAINT "order_status_id_fkey" FOREIGN KEY ("status_id") REFERENCES "status"("id") ON DELETE CASCADE ON UPDATE CASCADE;

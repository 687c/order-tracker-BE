-- AlterTable
CREATE SEQUENCE account_id_seq;
ALTER TABLE "account" ALTER COLUMN "id" SET DEFAULT nextval('account_id_seq');
ALTER SEQUENCE account_id_seq OWNED BY "account"."id";

-- AlterTable
CREATE SEQUENCE order_id_seq;
ALTER TABLE "order" ALTER COLUMN "id" SET DEFAULT nextval('order_id_seq');
ALTER SEQUENCE order_id_seq OWNED BY "order"."id";

-- AlterTable
CREATE SEQUENCE status_id_seq;
ALTER TABLE "status" ALTER COLUMN "id" SET DEFAULT nextval('status_id_seq');
ALTER SEQUENCE status_id_seq OWNED BY "status"."id";

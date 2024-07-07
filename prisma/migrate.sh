npx prisma migrate diff \
  --from-empty \
  --to-schema-datamodel ./prisma/schema.prisma \
  --script > prisma/migrations/0001_create_user_table.sql

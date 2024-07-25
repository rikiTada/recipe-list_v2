#!/bin/bash

# prisma/schema.prisma があるディレクトリを取得
schema_dir=$(dirname ./prisma/schema.prisma)

# ディレクトリ内のフォルダ数を取得し、4桁で0埋め
folder_count=$(find "$schema_dir" -maxdepth 1 -type d | wc -l)
folder_count=$((folder_count + 1))
padded_count=$(printf "%04d" $folder_count)

# ユーザーに入力促す
read -p "🫠 ファイル名を入力: " filename

# ファイル名を作成
new_filename="${padded_count}_${filename}.sql"

# コマンド実行
npx prisma migrate diff \
  --from-empty \
  --to-schema-datamodel ./prisma/schema.prisma \
  --script > prisma/migrations/"$new_filename"

echo "🤗 マイグレーションファイルが作成されました: $new_filename"

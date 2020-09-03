# react-redux-express-jwt

## 環境構築

- clone する
- postgresql でテーブル作成

  - account_table

  ```
  CREATE TABLE public.account_table
  (
   id serial NOT NULL,
   email character varying COLLATE pg_catalog."default",
   name character varying COLLATE pg_catalog."default",
   password character varying COLLATE pg_catalog."default",
   roles character varying DEFAULT 'USER_ROLE' COLLATE pg_catalog."default",
   delete_flag character varying(1) DEFAULT '0' COLLATE pg_catalog."default"
  )
  WITH (
   OIDS = FALSE
  )
  TABLESPACE pg_default;
  ALTER TABLE public.account_table
  OWNER to postgres;
  ```

- postgresql の起動用レコード追加
  - account_table

```
INSERT INTO account_table (email, name, password, roles, delete_flag) VALUES('admin@example.com', 'admin', '$2b$10$gT32C6vCWUsP41cYKPZC1eHNMiSNlEfWckUox3BHblEqHg4g74GnG', 'USER_ROLE,ADMIN_ROLE', '0');
  INSERT INTO account_table (email, name, password) VALUES('user@example.com', 'user', '$2b$10$gT32C6vCWUsP41cYKPZC1eHNMiSNlEfWckUox3BHblEqHg4g74GnG');

```

```

- パッケージのインストール

```

\$ npm install

```

- nodemon インストール

```

\$ npm install -g nodemon

```

- サーバ起動

```

\$ npm run server

```

```

```

```

```

```

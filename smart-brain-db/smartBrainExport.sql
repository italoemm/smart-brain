PGDMP     -    *                v         
   smartBrain    10.4    10.4                 0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                       false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                       false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                       false                       1262    16406 
   smartBrain    DATABASE     �   CREATE DATABASE "smartBrain" WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'Portuguese_Brazil.1252' LC_CTYPE = 'Portuguese_Brazil.1252';
    DROP DATABASE "smartBrain";
             italo    false                        2615    2200    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
             postgres    false                       0    0    SCHEMA public    COMMENT     6   COMMENT ON SCHEMA public IS 'standard public schema';
                  postgres    false    3                        3079    12924    plpgsql 	   EXTENSION     ?   CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;
    DROP EXTENSION plpgsql;
                  false                       0    0    EXTENSION plpgsql    COMMENT     @   COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';
                       false    1            �            1259    16423    login    TABLE     z   CREATE TABLE public.login (
    id integer NOT NULL,
    email text NOT NULL,
    hash character varying(100) NOT NULL
);
    DROP TABLE public.login;
       public         postgres    false    3                       0    0    TABLE login    ACL     U   GRANT ALL ON TABLE public.login TO italo;
GRANT ALL ON TABLE public.login TO PUBLIC;
            public       postgres    false    199            �            1259    16421    login_id_seq    SEQUENCE     �   CREATE SEQUENCE public.login_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.login_id_seq;
       public       postgres    false    199    3                       0    0    login_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.login_id_seq OWNED BY public.login.id;
            public       postgres    false    198                       0    0    SEQUENCE login_id_seq    ACL     4   GRANT ALL ON SEQUENCE public.login_id_seq TO italo;
            public       postgres    false    198            �            1259    16409    users    TABLE     �   CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(100),
    email text NOT NULL,
    entries bigint DEFAULT 0,
    joined timestamp without time zone
);
    DROP TABLE public.users;
       public         postgres    false    3            	           0    0    TABLE users    ACL     U   GRANT ALL ON TABLE public.users TO italo;
GRANT ALL ON TABLE public.users TO PUBLIC;
            public       postgres    false    197            �            1259    16407    users_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public       postgres    false    197    3            
           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
            public       postgres    false    196                       0    0    SEQUENCE users_id_seq    ACL     4   GRANT ALL ON SEQUENCE public.users_id_seq TO italo;
            public       postgres    false    196            x
           2604    16426    login id    DEFAULT     d   ALTER TABLE ONLY public.login ALTER COLUMN id SET DEFAULT nextval('public.login_id_seq'::regclass);
 7   ALTER TABLE public.login ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    198    199    199            v
           2604    16412    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    196    197    197            �
          0    16423    login 
   TABLE DATA               0   COPY public.login (id, email, hash) FROM stdin;
    public       postgres    false    199   �       �
          0    16409    users 
   TABLE DATA               A   COPY public.users (id, name, email, entries, joined) FROM stdin;
    public       postgres    false    197   �                  0    0    login_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.login_id_seq', 1, false);
            public       postgres    false    198                       0    0    users_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.users_id_seq', 7, true);
            public       postgres    false    196            ~
           2606    16433    login login_email_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public.login
    ADD CONSTRAINT login_email_key UNIQUE (email);
 ?   ALTER TABLE ONLY public.login DROP CONSTRAINT login_email_key;
       public         postgres    false    199            �
           2606    16431    login login_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.login
    ADD CONSTRAINT login_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.login DROP CONSTRAINT login_pkey;
       public         postgres    false    199            z
           2606    16420    users users_email_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);
 ?   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_key;
       public         postgres    false    197            |
           2606    16418    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public         postgres    false    197            �
      x������ � �      �
   ?   x�3��,I�ɇ��%���9z������F����F
F�V��V&fz�FF&F\1z\\\ U     
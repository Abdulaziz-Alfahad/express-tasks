--
-- PostgreSQL database dump
--

-- Dumped from database version 17.4
-- Dumped by pg_dump version 17.4

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: TaskStatus; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public."TaskStatus" AS ENUM (
    'pending',
    'in_progress',
    'completed'
);


ALTER TYPE public."TaskStatus" OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Task; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Task" (
    id integer NOT NULL,
    name text NOT NULL,
    content text,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    status public."TaskStatus" NOT NULL,
    "userId" integer
);


ALTER TABLE public."Task" OWNER TO postgres;

--
-- Name: Task_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Task_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Task_id_seq" OWNER TO postgres;

--
-- Name: Task_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Task_id_seq" OWNED BY public."Task".id;


--
-- Name: User; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."User" (
    id integer NOT NULL,
    username text NOT NULL,
    password text NOT NULL,
    email text NOT NULL,
    "firstName" text NOT NULL,
    "lastName" text,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public."User" OWNER TO postgres;

--
-- Name: User_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."User_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."User_id_seq" OWNER TO postgres;

--
-- Name: User_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."User_id_seq" OWNED BY public."User".id;


--
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


ALTER TABLE public._prisma_migrations OWNER TO postgres;

--
-- Name: Task id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Task" ALTER COLUMN id SET DEFAULT nextval('public."Task_id_seq"'::regclass);


--
-- Name: User id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."User" ALTER COLUMN id SET DEFAULT nextval('public."User_id_seq"'::regclass);


--
-- Data for Name: Task; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Task" (id, name, content, "createdAt", status, "userId") FROM stdin;
2	Write TypeScript app	Build a simple REST API with Express and Prisma	2025-04-15 16:55:26.472	pending	1
3	Write TypeScript app	Build a simple REST API with Express and Prisma	2025-04-15 16:56:33.121	pending	1
4	Write TypeScript app	Build a simple REST API with Express and Prisma	2025-04-15 17:05:11.809	pending	1
1	I'M an updated guy2!!	and I love it!	2025-04-15 16:53:25.884	completed	1
\.


--
-- Data for Name: User; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."User" (id, username, password, email, "firstName", "lastName", "createdAt") FROM stdin;
1	System	azoz1430	abdulazizx0x1430@gmail.com	System	\N	2025-04-18 16:35:40.241
3	azoz1430	Azoz1430.	abdulazizx0x14301@gmail.com	Abdulaziz	\N	2025-04-20 12:30:09.244
6	azoz14301	Azoz1430.	abdulazizx0x143011@gmail.com	Abdulaziz	\N	2025-04-20 12:33:25.328
7	azoz143011	Azoz1430.	abdulazizx0x1430111@gmail.com	Abdulaziz	\N	2025-04-20 12:34:04.207
8	Sahal	PrinceSahal	prince.Sahal@gmail.com	Sahal	\N	2025-04-20 12:37:20.12
9	Sahal2	PrinceSahal	prince.Sahal2@gmail.com	Sahal	\N	2025-04-20 12:39:33.925
10	Sahal3	PrinceSahal	prince.Sahal3@gmail.com	Sahal	\N	2025-04-20 12:40:40.821
11	Sahal4	PrinceSahal	prince.Sahal4@gmail.com	Sahal	\N	2025-04-20 12:42:14.453
\.


--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
c56a6e24-2f76-4fd1-b288-b676c39d01ef	82f5a6d34bbedbc017fe18ef7ec797dcc179c0ef87bb071400b52fecc921e0de	2025-04-15 17:14:31.939124+03	20250415141431_init	\N	\N	2025-04-15 17:14:31.922536+03	1
7fe30a0f-4c99-46f7-ac97-2a086c8e53d6	2e53989d8a5658a7158a0561be69ff41f2d26a05c378b64247b37578932d61d8	2025-04-15 19:38:55.519783+03	20250415163854_add_status_enum	\N	\N	2025-04-15 19:38:55.50803+03	1
c5fe0ba7-55bf-4416-a96b-84a59e73cec4	f02abfe3a03c423952d9cbe3d01191708cd16277a98ff35bb6cf8cc6b86667ef	2025-04-18 19:07:29.250937+03	20250418160728_added_users	\N	\N	2025-04-18 19:07:29.221049+03	1
\.


--
-- Name: Task_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Task_id_seq"', 4, true);


--
-- Name: User_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."User_id_seq"', 11, true);


--
-- Name: Task Task_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Task"
    ADD CONSTRAINT "Task_pkey" PRIMARY KEY (id);


--
-- Name: User User_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_pkey" PRIMARY KEY (id);


--
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- Name: User_email_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "User_email_key" ON public."User" USING btree (email);


--
-- Name: User_username_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "User_username_key" ON public."User" USING btree (username);


--
-- Name: Task Task_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Task"
    ADD CONSTRAINT "Task_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- PostgreSQL database dump complete
--


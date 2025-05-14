-- Tabla de usuarios
CREATE TABLE "User" (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Tabla de cursos (materias)
CREATE TABLE "Course" (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    code TEXT UNIQUE
);

-- Tabla de categorías de apuntes
CREATE TABLE "Category" (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL UNIQUE
);

-- Tabla de apuntes subidos por usuarios
CREATE TABLE "Note" (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    file_url TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),

    -- Claves foráneas
    user_id INTEGER NOT NULL REFERENCES "User"(id) ON DELETE CASCADE,
    course_id INTEGER REFERENCES "Course"(id),
    category_id INTEGER REFERENCES "Category"(id)
);

-- Tabla de archivos guardados (como favoritos o archivados)
CREATE TABLE "Archive" (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES "User"(id) ON DELETE CASCADE,
    note_id INTEGER NOT NULL REFERENCES "Note"(id) ON DELETE CASCADE,
    archived_at TIMESTAMP DEFAULT NOW(),
    
    -- Para evitar duplicados
    UNIQUE(user_id, note_id)
);

-- Tabla interna de Prisma (no modificar)
-- _prisma_migrations se deja como está, controlada por Prisma

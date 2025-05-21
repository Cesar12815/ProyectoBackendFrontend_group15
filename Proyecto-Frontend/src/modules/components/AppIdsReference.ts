export const USERS = [
  { id: 'eccba8af-4c48-4ab1-b28c-efc26e8fd972', name: 'Maria Alejandra', email: 'maria.alejandra@example.com', categoryId: '9e1559b0-48ed-43d5-b57f-4caf33e39d44' }, // Computación
  { id: '6e84933a-2a31-4205-b975-14a9d5d28dad', name: 'Usuario De Prueba', email: 'prueba@example.com', categoryId: '1' }, // Ciencias Exactas
  { id: '91fe0001-488e-46a7-8fa2-1dd4f8a9b58e', name: 'Bob Johnson', email: 'bob.johnson@example.com', categoryId: '2' }, // Ciencias Sociales
  { id: 'bd45d1bf-744d-4f0e-9a6e-8c63b0dcc141', name: 'Alice Smith', email: 'alice.smith@example.com', categoryId: '3' }, // Salud
  { id: '4f08af21-901f-4a37-8adb-a9dd11b67b52', name: 'Charlie Brown', email: 'charlie.brown@example.com', categoryId: '4' }, // Derecho
  { id: 'af80cdf5-1297-4056-9648-f9f245d32339', name: 'Diana Miller', email: 'diana.miller@example.com', categoryId: '5' }, // Idiomas
  { id: 'b06da24d-cdf9-430f-ade9-1ba9c6c7b786', name: 'Eve Davis', email: 'eve.davis@example.com', categoryId: '6' }, // Negocios
  { id: '1e66a713-b64c-405d-b72a-b177581032e1', name: 'Frank White', email: 'frank.white@example.com', categoryId: '7' }, // Arte
  { id: 'e1bc6a55-ec57-4f49-8a0a-0ba38f0a7b13', name: 'Grace Taylor', email: 'grace.taylor@example.com', categoryId: '1' },
  { id: 'dba019be-3739-47cf-8e16-2e8e374bb45e', name: 'Henry Wilson', email: 'henry.wilson@example.com', categoryId: '2' },
  { id: 'ab23a61a-dfce-4088-9df1-f049208e0537', name: 'Ivy Moore', email: 'ivy.moore@example.com', categoryId: '3' },
  { id: '0671b546-389f-4a68-b002-72c4d2d406fc', name: 'Jack Green', email: 'jack.green@example.com', categoryId: '4' }
];

export const CATEGORIES = [
  { id: '9e1559b0-48ed-43d5-b57f-4caf33e39d44', name: 'Tecnología e Ingeniería' }, // Computación
  { id: '1', name: 'Ciencias Exactas' },
  { id: '2', name: 'Ciencias Sociales' },
  { id: '3', name: 'Ciencias de la Salud' },
  { id: '4', name: 'Derecho y Leyes' },
  { id: '5', name: 'Idiomas' },
  { id: '6', name: 'Negocios' },
  { id: '7', name: 'Arte y Humanidades' },
];

export const COURSES = [
  { id: '805a09af-82b5-4bd3-ace8-e9830c9fec27', name: 'Estructuras de Datos', code: 'ED2025', categoryId: '9e1559b0-48ed-43d5-b57f-4caf33e39d44' },
  { id: '88a93ea4-12a6-4848-8b86-88de08ad6140', name: 'Estructuras de Datos Avanzadas', code: 'EDA2025', categoryId: '9e1559b0-48ed-43d5-b57f-4caf33e39d44' },
  { id: 'a2d9f61a-5c0b-4b6d-b9b3-47263c80d7c2', name: 'Introducción a JavaScript', code: 'JS101', categoryId: '22dcea3d-0731-4398-8ed7-37167f383145' },
  { id: '07993659-7bac-4ad4-abfc-7c3211e18bd6', name: 'Principios de UX/UI', code: 'UXUI101', categoryId: '1a5be124-5a19-468e-83c3-d3f3ebe91a07' },
  { id: 'd4b0f916-847c-420e-a260-2ab8189f8a62', name: 'Análisis Literario Clásico', code: 'ALC2025', categoryId: '6bc94e6f-defa-415d-b5fc-7bc6a02782c5' },
  { id: '4fcead7a-fc7f-4998-a32c-12d9fa7d9dd2', name: 'Finanzas Corporativas', code: 'FC301', categoryId: '6d25783e-00a6-415b-8d63-07a1973a063a' },
  { id: '336d2244-364a-4409-b31d-011ccd128976', name: 'Historia de la Música Clásica', code: 'HMC101', categoryId: '7a08e785-ed94-4b95-bb4e-729e2fa2bdfe' }
];

export const NOTES = [
  {
    id: '66a52354-c20c-4cac-8cc3-611784ecf17c',
    title: 'Conceptos Fundamentales de Bases de Datos',
    fileUrl: 'https://midominio.com/apuntes/bases_de_datos_fundamentos.pdf',
    courseId: '805a09af-82b5-4bd3-ace8-e9830c9fec27',
    authorId: 'eccba8af-4c48-4ab1-b28c-efc26e8fd972'
  }
  // Agrega aquí más notas si tienes en tu base de datos
];

// Puedes importar estos arrays en cualquier componente privado para consultar IDs y nombres rápidamente.

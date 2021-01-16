export const dateColumns = [
  {
    name: 'created_at',
    type: 'timestamp with time zone',
    default: 'now()',
  },
  {
    name: 'updated_at',
    type: 'timestamp with time zone',
    isNullable: true,
    default: 'now()',
  },
  {
    name: 'deleted_at',
    type: 'timestamp with time zone',
    isNullable: true,
  },
];

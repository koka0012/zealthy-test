'use client'

import { User } from '@prisma/client'
import { ColumnDef } from '@tanstack/react-table'
import { format } from 'date-fns'

export const userColumns: ColumnDef<User>[] = [
  {
    accessorKey: 'id',
    header: 'Id',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'aboutMe',
    header: 'About Me',
    cell: ({ cell }) => (
      <p className="line-clamp-2" title={String(cell.getValue() || '')}>
        {String(cell.getValue() || '')}
      </p>
    ),
  },
  {
    accessorKey: 'birthDate',
    header: 'Birth Date',
    cell: ({ cell }) => {
      const value = cell.getValue()
      if (!value) return null
      const date = format(new Date(value as string), 'MM/dd/yyyy')
      return date
    },
  },
  {
    accessorKey: 'state',
    header: 'State',
  },
  {
    accessorKey: 'city',
    header: 'City',
  },
  {
    accessorKey: 'street',
    header: 'Street',
  },
  {
    accessorKey: 'zip',
    header: 'Zip',
  },
]

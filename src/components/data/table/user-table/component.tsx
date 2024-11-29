import { DataTable } from '@/components/organisms/data-table'
import { userColumns } from './columns'
import { getUsersRequest } from '@/lib/api/user/getUsers'

const UserTable = async () => {
  const data = await getUsersRequest()
  return (
    <div>
      <DataTable columns={userColumns} data={data} />
    </div>
  )
}

export { UserTable }

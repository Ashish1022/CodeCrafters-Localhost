
import { DataTable } from "./data-table"
import { columns, CompanyDef } from "./columns"
import { Company } from "@prisma/client"

interface TableContainerProps {
  companies: Company[],
}

const TableContainer = ({ companies }: TableContainerProps) => {
  const data = companies.map((item) => (
    {
      symbol: item.symbol,
      sector: "Mumbai",
      trend: "Dubai",
      price: item.price,
      percentChg: 10
    }
  ))

  return (
    <DataTable columns={columns} data={data} />
  )
}

export default TableContainer
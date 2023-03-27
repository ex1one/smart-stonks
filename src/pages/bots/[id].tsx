import { useMemo } from "react"
import { Bot, getBots } from "src/core/modules"
import { useTable, useResizeColumns, useFlexLayout, useRowSelect } from "react-table"
import Layout from "src/core/layouts/Layout"

const getColumns = (bot?: Bot) => {
  return (
    bot &&
    Object.entries(bot).map(([key, value], index) => ({
      Header: key,
      accessor: key,
    }))
  )
}

const ApiBots = ({ bots }: { bots: Bot[] }) => {
  const columns = useMemo(() => {
    return getColumns(bots[0])
  }, [])

  const data = useMemo(() => {
    return bots
  }, [bots])

  const tableInstance = useTable({ columns, data }, useResizeColumns, useFlexLayout, useRowSelect)
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance

  return (
    <Layout>
      <table className="mt-5 overflow-x-scroll" {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup, index) => (
            <tr key={`${headerGroup}+${index}`} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, index) => (
                <th
                  className="border border-[#E2E2ED] px-2 dark:border-[#262840] dark:text-gray-900"
                  key={`${column}+${index}`}
                  {...column.getHeaderProps()}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, index) => {
            prepareRow(row)
            return (
              <tr key={`${row}+${index}`} {...row.getRowProps()}>
                {row.cells.map((cell, cellIndex) => {
                  return (
                    <td
                      className="border border-[#E2E2ED] px-2 dark:border-[#262840] dark:text-gray-900"
                      key={`${cell}+${cellIndex}`}
                      {...cell.getCellProps()}
                    >
                      {cell.render("Cell")}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </Layout>
  )
}

export async function getServerSideProps() {
  const bots = await getBots()

  return {
    props: { bots },
  }
}

export default ApiBots

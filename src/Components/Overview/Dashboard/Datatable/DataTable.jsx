import React from 'react';
import { useTable, useGlobalFilter, useSortBy, usePagination } from 'react-table';
import {
 Table,
 Thead,
 Tbody,
 Tr,
 Th,
 Td,
 Input,
 Button,
 Select,
 Box,
 Flex
} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

function DataTable({ columns, data }) {
 const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    state,
    setGlobalFilter,
    page,
    canPreviousPage,
    canNextPage,
    nextPage,
    previousPage,
    pageOptions,
    pageCount,
    gotoPage,
    setPageSize,
    state: { pageIndex, pageSize },
 } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    useGlobalFilter,
    useSortBy,
    usePagination,
 );

 return (
    <Box marginBottom={13}>
      <Input
        value={state.globalFilter || ''}
        onChange={e => setGlobalFilter(e.target.value || undefined)}
        placeholder="Search..."
        mb={4}
      />
      <Table {...getTableProps()} variant="simple" width="full" size="sm">
        <Thead>
          {headerGroups.map(headerGroup => (
            <Tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <Th
                 {...column.getHeaderProps(column.getSortByToggleProps())}
                 isNumeric={column.isNumeric}
                >
                 {column.render('Header')}
                 <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                 </span>
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {page.map(row => {
            prepareRow(row);
            return (
              <Tr {...row.getRowProps()}>
                {row.cells.map(cell => (
                 <Td {...cell.getCellProps()} isNumeric={cell.column.isNumeric}>
                    {cell.render('Cell')}
                 </Td>
                ))}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
      <Flex mt={4} justifyContent="space-between">
        <Button
          onClick={() => gotoPage(0)}
          isDisabled={!canPreviousPage}
          leftIcon={<ChevronLeftIcon />}
        >
          {'<<'}
        </Button>
        <Button
          onClick={() => previousPage()}
          isDisabled={!canPreviousPage}
          leftIcon={<ChevronLeftIcon />}
        >
          {'<'}
        </Button>
        <Button
          onClick={() => nextPage()}
          isDisabled={!canNextPage}
          rightIcon={<ChevronRightIcon />}
        >
          {'>'}
        </Button>
        <Button
          onClick={() => gotoPage(pageCount - 1)}
          isDisabled={!canNextPage}
          rightIcon={<ChevronRightIcon />}
        >
          {'>>'}
        </Button>
        <Box>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </Box>
        <Box>
          | Go to page:{' '}
          <Input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            width="100px"
          />
        </Box>
        <Select
          value={pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value));
          }}
          width="100px"
        >
          {[10, 20, 30, 40, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </Select>
      </Flex>
    </Box>
 );
}

export default DataTable;

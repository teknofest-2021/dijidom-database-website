import { forwardRef } from "react";
import MaterialTable, { MTableToolbar } from "material-table";
import {
  MdLastPage,
  MdSearch,
  MdClear,
  MdFirstPage,
  MdNavigateNext,
  MdNavigateBefore,
  MdArrowDownward,
} from "react-icons/md";

const tableIcons = {
  FirstPage: forwardRef((props, ref) => {
    return <MdFirstPage {...props} ref={ref} />;
  }),
  LastPage: forwardRef((props, ref) => {
    return <MdLastPage {...props} ref={ref} />;
  }),
  NextPage: forwardRef((props, ref) => {
    return <MdNavigateNext {...props} ref={ref} />;
  }),
  PreviousPage: forwardRef((props, ref) => {
    return <MdNavigateBefore {...props} ref={ref} />;
  }),
  ResetSearch: forwardRef((props, ref) => {
    return <MdClear size={20} color={"#F00909"} {...props} ref={ref} />;
  }),
  Search: forwardRef((props, ref) => {
    return <MdSearch size={20} color={"#F00909"} {...props} ref={ref} />;
  }),
  SortArrow: forwardRef((props, ref) => {
    return <MdArrowDownward {...props} ref={ref} />;
  }),
};

export default function Table({
  title,
  columns,
  datas,
  loading,
  pageSize=5,
  pageSizeOptions=[5, 10, 50, 100],
}) {
  return (
    <MaterialTable
      style={{
        borderRadius: "10px",
        marginTop: "1%",
      }}
      icons={tableIcons}
      title={title}
      columns={columns}
      data={datas}
      components={{
        Toolbar: (props) => (
          <div
            style={{
              backgroundColor: "#252525",
              color: "#FFF",
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
            }}
          >
            <MTableToolbar {...props} />
          </div>
        ),
      }}
      options={{
        sorting: true,
        search: true,
        pageSize: pageSize,
        pageSizeOptions: pageSizeOptions,
        searchFieldStyle: {
          color: "#FFF",
        },
        headerStyle: {
          textAlign: "center",
        },
        paginationType: "stepped"
      }}
      isLoading={loading}
    />
  );
}

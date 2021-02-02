import { setShowParams } from "redux/slices/showParams";
import { useDispatch } from "react-redux";
import { Pagination as MuiPagination } from "@material-ui/lab";

const Pagination = ({ pages, currentPage }) => {
  const dispatch = useDispatch();

  const onPageChange = (event, value) =>
    dispatch(setShowParams({ type: "currentPage", value }));

  return (
    !!pages && (
      <MuiPagination
        count={pages}
        color="primary"
        onChange={onPageChange}
        page={currentPage}
      />
    )
  );
};

export default Pagination;

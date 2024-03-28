import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersAction } from "../../actions/userAction";

const ListUser = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const { users } = useSelector((state) => state.users);
  const [currentPage, setCurrentPage] = useState(1);
  const [visiblePages, setVisiblePages] = useState([]);

  console.log(currentPage);
  useEffect(() => {
    dispatch(fetchUsersAction(token, currentPage));
  }, [dispatch, token, currentPage]);
  useEffect(() => {
    const totalPages = users.totalPages;
    const newVisiblePages = [];
    const maxVisiblePages = 3;
    const startPage = Math.max(
      1,
      currentPage - Math.floor(maxVisiblePages / 2)
    );
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    for (let i = startPage; i <= endPage; i++) {
      newVisiblePages.push(i);
    }
    setVisiblePages(newVisiblePages);
  }, [users, currentPage]);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className="">
        <p className="h2">List User</p>
      </div>
      <table className="table">
        <tr className="row header">
          <th className="cell">SEQ</th>
          <th className="cell">Name</th>
          <th className="cell">Email</th>
          <th className="cell">Created at</th>
          <th className="cell">Avatar</th>
          <th className="cell">Action</th>
        </tr>
        <tbody>
          {users?.result?.map((user, index) => (
            <>
              <tr className="row" key={user.id}>
                <td className="cell" data-title="Seq">
                  {index + 1}
                </td>
                <td className="cell" data-title="Name">
                  {user.name}
                </td>
                <td className="cell" data-title="Email">
                  {user.email}
                </td>
                <td className="cell" data-title="CreateAt">
                  {user.created_at}
                </td>
                <td className="cell" data-title="Location">
                  <img src={user.avatar_link} alt="" />
                </td>
                <td className="cell">
                  <button type="button" className="button-3">
                    Edit
                  </button>
                  &nbsp;
                  <button type="button" className="button-4">
                    Delete
                  </button>
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button
          className={
            currentPage === 1 ? "paginationNum hiddenNum" : "paginationNum"
          }
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        {visiblePages.map((page) => (
          <button
            key={page}
            className={
              currentPage === page ? "paginationNum activeNum" : "paginationNum"
            }
            onClick={() => handlePageChange(page)}
          >
            {page}
          </button>
        ))}
        <button
          className={
            currentPage === users.totalPages
              ? "paginationNum hiddenNum"
              : "paginationNum"
          }
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === users.totalPages}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default ListUser;

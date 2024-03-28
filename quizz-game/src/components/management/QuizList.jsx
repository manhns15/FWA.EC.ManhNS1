import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { questionsAction } from "../../actions/questionAction";

const QuizList = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const { questions } = useSelector((state) => state.questions);
  const [currentPage, setCurrentPage] = useState(1);
  const [visiblePages, setVisiblePages] = useState([]);

  useEffect(() => {
    dispatch(questionsAction(token, currentPage));
  }, [dispatch, token, currentPage]);

  useEffect(() => {
    const totalPages = questions.totalPages;
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
  }, [questions, currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <>
      <div className="">
        <p className="h2">List Quiz</p>
      </div>
      <table className="table">
        <tr className="row header">
          <th className="cell">SEQ</th>
          <th className="cell">Title</th>
          <th className="cell">Created at</th>
          <th className="cell">Thumbnail</th>
          <th className="cell">Action</th>
        </tr>
        <tbody>
          {questions?.result?.map((question, index) => (
            <>
              <tr className="row" key={question.id}>
                <td className="cell" data-title="SEQ">
                  {index + 1}
                </td>
                <td className="cell" data-title="Title">
                  {question.title}
                </td>
                <td className="cell" data-title="CreatedAt">
                  {question.createdAt}
                </td>
                <td className="cell" data-title="Thumbnail">
                  <img src={question.thumbnail_link} alt="" />
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
            currentPage === questions.totalPages
              ? "paginationNum hiddenNum"
              : "paginationNum"
          }
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === questions.totalPages}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default QuizList;

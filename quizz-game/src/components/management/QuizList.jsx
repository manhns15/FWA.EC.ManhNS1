const QuizList = () => {
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
          <tr className="row">
            <td className="cell" data-title="Name">
              Luke Peters
            </td>
            <td className="cell" data-title="Age">
              25
            </td>
            <td className="cell" data-title="Occupation">
              Freelance Web Developer
            </td>
            <td className="cell" data-title="Location">
              Brookline, MA
            </td>
            <td></td>
          </tr>

          <tr className="row">
            <td className="cell" data-title="Name">
              Joseph Smith
            </td>
            <td className="cell" data-title="Age">
              27
            </td>
            <td className="cell" data-title="Occupation">
              Project Manager
            </td>
            <td className="cell" data-title="Location">
              Somerville, MA
            </td>
            <td></td>
          </tr>

          <tr className="row">
            <td className="cell" data-title="Name">
              Maxwell Johnson
            </td>
            <td className="cell" data-title="Age">
              26
            </td>
            <td className="cell" data-title="Occupation">
              UX Architect & Designer
            </td>
            <td className="cell" data-title="Location">
              Arlington, MA
            </td>
            <td></td>
          </tr>

          <tr className="row">
            <td className="cell" data-title="Name">
              Harry Harrison
            </td>
            <td className="cell" data-title="Age">
              25
            </td>
            <td className="cell" data-title="Occupation">
              Front-End Developer
            </td>
            <td className="cell" data-title="Location">
              Boston, MA
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default QuizList;

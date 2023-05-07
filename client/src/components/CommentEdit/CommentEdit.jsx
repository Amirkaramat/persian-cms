
import ReactDOM from 'react-dom'
const CommentEdit = ({ submitEdit, cancelEdit, showEdit,setCommentBody,
commentBody }) => {
  return ReactDOM.createPortal(
    <>
      {showEdit && (
        <div className=' fixed inset-0  w-full border border-black flex justify-center items-center bg-gray-900 bg-opacity-80 z-40'>
          <div className='w-[50%] delete-modal-container flex flex-col space-y-5 items-center p-10 bg-gray-300 rounded-xl z-50'>
            <h1>تغییرات لازم را اعمال نمایید</h1>
            <input
              value={commentBody}
              onChange={(e) => setCommentBody(e.target.value)}
              type='text'
              className='p-2 w-full placeholder-blue-900'
              placeholder='متن مورد نظر خود را وارد نمایید...'
            />
            <div className='delete-modal-buttons flex justify-evenly w-full text-white'>
              <button
                className='w-[100px] p-2 bg-blue-800 rounded-xl'
                onClick={() => submitEdit()}>
                بله
              </button>
              <button
                className='w-[100px] p-2 bg-purple-700 rounded-xl'
                onClick={() => cancelEdit()}>
                خیر
              </button>
            </div>
          </div>
        </div>
      )}
    </>,document.getElementById('modal-parent')
  );
};

export default CommentEdit;

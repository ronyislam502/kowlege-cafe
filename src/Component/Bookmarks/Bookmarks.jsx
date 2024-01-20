import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks, readingTime}) => {
    
    return (
        <div>
            <div className='m-8'>
                <h2 className='text-3xl font-bold'>Reading Time:{readingTime}</h2>
            </div>
            <div className="md:1/3 ml-4 bg-slate-50">
            <h2 className="text-3xl font-bold ml-4 mb-8">Bookmarked Blogs : {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, idx)=><Bookmark key={idx}
                bookmark={bookmark}
                ></Bookmark>)
            }
        </div>
        </div>
    );
};

Bookmarks.propTypes={
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks;
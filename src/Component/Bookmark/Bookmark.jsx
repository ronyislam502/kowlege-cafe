import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {title}=bookmark;
    return (
        
        <div>
            <h3 className='text-xl bg-slate-300 mb-2 p-4 rounded-xl'>{title}</h3>
            <h3></h3>
        </div>
        
    );
};
Bookmark.propTypes={
    bookmark: PropTypes.object,   
}

export default Bookmark;
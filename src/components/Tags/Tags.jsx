
import PropTypes from 'prop-types';
const Tags = ({tag}) => {
    return (
        <div className=''>
            <h2 className=''><button className='text-[#23BE0A] font-medium py-1 px-2 bg-base-200 rounded-full'><span className='font-extrabold'>#</span>{tag}</button></h2>
        </div>
    );
};

Tags.propTypes={
    tag: PropTypes.string
}
export default Tags;
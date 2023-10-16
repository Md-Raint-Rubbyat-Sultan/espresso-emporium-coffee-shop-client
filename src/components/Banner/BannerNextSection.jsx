import PropTypes from 'prop-types';


const BannerNextSection = ({ item, heading, text }) => {
    return (
        <div className='space-y-4'>
            <img className='w-16 h-16' src={item} alt="" />
            <h3 className='text-4xl text-[#331A15] font-rancho'>{heading}</h3>
            <p>{text}</p>
        </div>
    );
}

BannerNextSection.propTypes = {
    item: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default BannerNextSection;
import PropTypes from 'prop-types';


const CommonButton = ({ btnTitle, btnColor, icon, customCss, btnType, isDisabled }) => {
    return (
        <button className={`bg-[#E3B577] px-3 md:px-5 py-1 md:py-2 text-2xl font-rancho border-2 border-[#E3B577] ${btnColor ? `${btnColor} hover:text-white` : "text-white hover:text-black"} rounded ${icon ? "flex items-center gap-2" : ""} hover:bg-transparent hover:border-2 hover:border-white ${customCss && customCss}`} type={btnType ? btnType : "button"} disabled={isDisabled ? true : false}>
            <span>{btnTitle}</span>
            {icon && <img className='w-6 h-6' src={icon} />}
        </button>
    );
}

CommonButton.propTypes = {
    btnTitle: PropTypes.string.isRequired,
    btnColor: PropTypes.string,
    icon: PropTypes.string,
    customCss: PropTypes.string,
    btnType: PropTypes.string,
    isDisabled: PropTypes.bool,
};

export default CommonButton;
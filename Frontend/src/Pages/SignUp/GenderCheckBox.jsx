
const GenderCheckBox = () => {
    return (
        <div className="flex">
            <div className="form-control">
                <label className="label gap-2 cursor-pointer">
                    <span className="label-text font-semibold text-white ">Male</span>
                    <input type="radio" name="radio-1" className="radio" />
                </label>
            </div>
            <div className="form-control">
                <label className="label gap-2 cursor-pointer">
                    <span className="label-text font-semibold text-white ">Female</span>
                    <input type="radio" name="radio-1" className="radio"  />
                </label>
            </div>
        </div>
    )
}

export default GenderCheckBox;
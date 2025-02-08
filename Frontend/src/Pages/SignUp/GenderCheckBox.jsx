
const GenderCheckBox = ({onCheckBoxChange,selectedGender}) => {
    return (
        <div className="flex">
            <div className="form-control">
                <label className={`label gap-2 cursor-pointer ${selectedGender === "male" ? "selected" : ""}`}>
                    <span className="label-text font-semibold text-white ">Male</span>
                    <input type="radio" name="radio-1" className="radio" 
                    checked={selectedGender === "male"}
                    onChange={()=> onCheckBoxChange("male")}
                    />
                </label>
            </div>
            <div className="form-control">
                <label className={`label gap-2 cursor-pointer ${selectedGender === "female" ? "selected" : ""}`}>
                    <span className="label-text font-semibold text-white ">Female</span>
                    <input type="radio" name="radio-1" className="radio"
                    checked={selectedGender === "female"}
                    onChange={()=> onCheckBoxChange("female")}
                    />
                </label>
            </div>
        </div>
    )
}

export default GenderCheckBox;
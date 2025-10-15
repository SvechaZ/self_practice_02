const bgColor =document.getElementById("bgColor")
const fontColor = document.getElementById("fontColor")
const fontSize = document.getElementById("fontSize")
const saveBtn = document.getElementById("saveBtn")
const resetBtn = document.getElementById("resetBtn")

document.addEventListener('DOMContentLoaded' , () => {
    const savebg = localStorage.getItem("bgColor")
    const savefont = localStorage.getItem("fontColor")
    const saveSize = localStorage.getItem("fontSize")

    const saveSetting = {
        bgColor:savebg || "white",
        fontColor:savefont || "black",
        fontSize:saveSize || "medium"
    }
    applySetting(saveSetting)
    // document.body.style.background = savebg
    // document.body.style.color = savefont
    // document.body.style.fontSize = saveSize

});
saveBtn.addEventListener('click' , () => {
    localStorage.setItem("bgColor",bgColor.value)
    localStorage.setItem("fontColor", fontColor.value)
    localStorage.setItem("fontSize",fontSize.value)

    const newSetting = {
        bgColor : bgColor.value,
        fontColor : fontColor.value,
        fontSize : fontSize.value

    }
    applySetting(newSetting)
    alert("save setting!")
})


resetBtn.addEventListener('click', ()=> {
    
    const defaultSetting = {
        bgColor : "white",
        fontColor : "black",
        fontSize: "medium"
    }
    localStorage.removeItem()
    applySetting(defaultSetting)
    alert("reset setting !")
})

function applySetting(setting) {
    // ไม่ต้องเข้าถึง value เพราะ browser แสดงเป้นvalue อยู่แล้ว
    document.body.style.background = setting.bgColor
    document.body.style.color = setting.fontColor
    document.body.style.fontSize = setting.fontSize

    bgColor.value = setting.bgColor
    fontColor.value = setting.fontColor
    fontSize.value = setting.fontSize
}

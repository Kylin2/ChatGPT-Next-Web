export function text2voice(text, lan){
    let obj = {
        tex: text,
        lan: lan.toUpperCase(),
        cuid: "baike",
        ctp: 1,
        pdt: 301,
        vol: 9,
        spd: 5,
        per: 0, // 111,103,5
    }
    return 'https://tts.baidu.com/text2audio' + axiosObj(obj)
}

function axiosObj (paramObj) {
    var res = '?'
    for (var key in paramObj) {
        res += '&' + key + '=' + paramObj[key]
    }
    return res
}

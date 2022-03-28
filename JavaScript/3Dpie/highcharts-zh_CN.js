(function (factory) {
    if (typeof module === "object" && module.exports) {
        module.exports = factory;
    } else {
        factory(Highcharts);
    }
})(function (Highcharts) {
    var protocol = window.location.protocol;
    var defaultOptionsZhCn = {
        lang: {
            contextButtonTitle: "图表导出菜单",
            decimalPoint: ".",
            downloadJPEG: "下载 JPEG 图片",
            downloadPDF: "下载 PDF 文件",
            downloadPNG: "下载 PNG 文件",
            downloadSVG: "下载 SVG 文件",
            downloadXLS: "下载 XLS 文件",
            openInCloud: "�? Highcharts Cloud �?打开",
            drillUpText: "返回 {series.name}",
            invalidDate: "无效的时�?",
            loading: "加载�?...",
            months: [
                "一�?",
                "二月",
                "三月",
                "四月",
                "五月",
                "�?�?",
                "七月",
                "�?�?",
                "九月",
                "十月",
                "十一�?",
                "十二�?",
            ],
            noData: "没有数据",
            numericSymbols: null,
            printChart: "打印图表",
            resetZoom: "重置缩放比例",
            resetZoomTitle: "重置为原始大�?",
            shortMonths: [
                "一�?",
                "二月",
                "三月",
                "四月",
                "五月",
                "�?�?",
                "七月",
                "�?�?",
                "九月",
                "十月",
                "十一�?",
                "十二�?",
            ],
            thousandsSep: ",",
            weekdays: [
                "星期�?",
                "星期一",
                "星期�?",
                "星期�?",
                "星期�?",
                "星期�?",
                "星期�?",
            ],
            viewData: "查看数据表格",
            rangeSelectorFrom: "开始时�?",
            rangeSelectorTo: "结束时间",
            rangeSelectorZoom: "范围",
            zoomIn: "缩小",
            zoomOut: "放大",
        },
        global: {
            canvasToolsURL:
                protocol + "//cdn.hcharts.cn/highcharts/modules/canvas-tools.js",
            VMLRadialGradientURL:
                protocol + +"//cdn.hcharts.cn/highcharts/gfx/vml-radial-gradient.png",
        },
        title: { text: "图表标�??" },
        tooltip: {
            dateTimeLabelFormats: {
                millisecond: "%H:%M:%S.%L",
                second: "%H:%M:%S",
                minute: "%H:%M",
                hour: "%H:%M",
                day: "%Y-%m-%d",
                week: "%Y-%m-%d",
                month: "%Y-%m",
                year: "%Y",
            },
            split: false,
        },
        exporting: { url: protocol + "//export.highcharts.com.cn" },
        credits: {
            text: "Highcharts.com.cn",
            href: "https://www.highcharts.com.cn",
        },
        xAxis: {
            dateTimeLabelFormats: {
                millisecond: "%H:%M:%S.%L",
                second: "%H:%M:%S",
                minute: "%H:%M",
                hour: "%H:%M",
                day: "%Y-%m-%d",
                week: "%Y-%m",
                month: "%Y-%m",
                year: "%Y",
            },
        },
        rangeSelector: {
            inputDateFormat: "%Y-%m-%d",
            buttons: [
                { type: "month", count: 1, text: "�?" },
                { type: "month", count: 3, text: "季度" },
                { type: "month", count: 6, text: "半年" },
                { type: "ytd", text: "YTD" },
                { type: "year", count: 1, text: "�?" },
                { type: "all", text: "所�?" },
            ],
        },
        plotOptions: {
            series: {
                dataGrouping: {
                    dateTimeLabelFormats: {
                        millisecond: [
                            "%Y-%m-%d %H:%M:%S.%L",
                            "%Y-%m-%d %H:%M:%S.%L",
                            " ~ %H:%M:%S.%L",
                        ],
                        second: ["%Y-%m-%d %H:%M:%S", "%Y-%m-%d %H:%M:%S", " ~ %H:%M:%S"],
                        minute: ["%Y-%m-%d %H:%M", "%Y-%m-%d %H:%M", " ~ %H:%M"],
                        hour: ["%Y-%m-%d %H:%M", "%Y-%m-%d %H:%M", " ~ %H:%M"],
                        day: ["%Y-%m-%d", "%Y-%m-%d", " ~ %Y-%m-%d"],
                        week: ["%Y-%m-%d", "%Y-%m-%d", " ~ %Y-%m-%d"],
                        month: ["%Y-%m", "%Y-%m", " ~ %Y-%m"],
                        year: ["%Y", "%Y", " ~ %Y"],
                    },
                },
            },
            ohlc: {
                tooltip: {
                    split: false,
                    pointFormat:
                        '<span style="color:{point.color}">�?</span> <b> {series.name}</b><br/>' +
                        "开盘：{point.open}<br/>" +
                        "最高：{point.high}<br/>" +
                        "最低：{point.low}<br/>" +
                        "收盘：{point.close}<br/>",
                },
            },
            candlestick: {
                tooltip: {
                    split: false,
                    pointFormat:
                        '<span style="color:{point.color}">�?</span> <b> {series.name}</b><br/>' +
                        "开盘：{point.open}<br/>" +
                        "最高：{point.high}<br/>" +
                        "最低：{point.low}<br/>" +
                        "收盘：{point.close}<br/>",
                },
            },
        },
    };
    Highcharts.setOptions(defaultOptionsZhCn);
});

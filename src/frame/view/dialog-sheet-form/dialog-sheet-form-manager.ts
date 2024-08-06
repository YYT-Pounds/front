import SheetFormManager from "@/frame/components/base/sheet-form/sheet-form-manager.ts";

/**
 * 表单框
 */
class DialogSheetFormManager<Model> {
    /**
     * 标题
     */
    title: string;
    /**
     * 表单大小
     */
    width: number;
    /**
     * 绑定数据前操作
     */
    bindData?: (data: Model) => Model
    /**
     * 提交数据前操作
     */
    beforeSubmit?: (data: Model) => Model
    /**
     * 表单核心
     */
    form: SheetFormManager<Model>

    /**
     * 构造函数
     */
    constructor(title: string, width: number, form: SheetFormManager<Model>) {
        this.title = title
        this.width = width
        this.form = form
    }
}

/**
 * 暴露
 */
export default DialogSheetFormManager



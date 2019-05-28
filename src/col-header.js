function ColHeader(containerElement, sizerReferenceElement, name) {
    this.containerElement = containerElement;
    this.sizerReferenceElement = sizerReferenceElement;
    this.name = name;

    this.rootElement = undefined;
    this.sizerElement = undefined;

    this.initialize();
}

ColHeader.prototype.initialize = function () {
    this.rootElement = $('<th></th>');
    this.sizerElement = $('<div class="col-header-content"></div>');
    this.sizerElement.appendTo(this.rootElement);
    this.sizerElement.html(this.name);
    this.rootElement.appendTo(this.containerElement);
}

ColHeader.prototype.updateWidth = function () {
    this.sizerElement.css('width', this.sizerReferenceElement.width());
}

export default ColHeader;
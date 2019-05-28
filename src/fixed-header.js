import ColHeader from './col-header.js';

function FixedHeader(containerElement, colHeaderSizerElements, colHeaderNames) {
    this.containerElement = containerElement;
    this.colHeaderSizerElements = colHeaderSizerElements;
    this.colHeaderNames = colHeaderNames;

    this.rootElement = undefined;
    this.colHeaders = undefined;

    this.initialize();
}

FixedHeader.prototype.initialize = function () {
    this.rootElement = $(`
      <table class="fixed-header">
        <thead>
          <tr></tr>
        </thead>
      </table>
    `);

    // Create the ColHeaders.
    this.colHeaders = [];
    var colHeaderContainer = this.rootElement.find('thead tr');
    for (var i = 0; i < this.colHeaderNames.length; i++) {
        this.colHeaders.push(new ColHeader(colHeaderContainer, this.colHeaderSizerElements[i], this.colHeaderNames[i]));
    }

    this.rootElement.appendTo(this.containerElement);

    setTimeout(function () {
        this.update();
        this.containerElement.height(this.rootElement.height());
        this.rootElement.css('visibility', 'visible');
        //this.setBorderRightWidth(12);
    }.bind(this), 50);

    $(window).resize(this.update.bind(this));
}

FixedHeader.prototype.updateWidths = function () {
    for (var i = 0; i < this.colHeaders.length; i++) {
        this.colHeaders[i].updateWidth();
    }
}

FixedHeader.prototype.update = function () {
    this.updateWidths();
    setTimeout(function () {
        this.updateWidths();
        setTimeout(function () {
            this.updateWidths();
        }.bind(this), 50);
    }.bind(this), 10);
}

FixedHeader.prototype.setBorderRightWidth = function (width) {
    this.rootElement.css('border-right', `${width}px solid #eee`);
}

export default FixedHeader;
/**
 * Created by akopylov on 03.07.2015.
 */
var React = require('react');

var Preview = React.createClass({
    render() {
        var outerClassName = 'col-md-4 col-md-offset-1';
        if (!this.props.src) {
            return(
                <div className={outerClassName}>
                    <h1>Lorem Ipsum</h1>
                    <div className="content">
                        Etiam placerat porttitor nunc, vel vehicula felis. Cras non dolor a lectus dignissim luctus et vitae tortor.
                        Aliquam non libero imperdiet, interdum mi quis, dignissim ipsum. Nam mauris ipsum, euismod et rhoncus eu,
                        tincidunt a turpis. Nulla iaculis egestas arcu sed convallis. Nullam pellentesque, nunc eu accumsan
                        fringilla, urna nisi facilisis sapien,
                        in eleifend urna tellus non libero. Quisque sit amet finibus neque, eget condimentum nisi.
                    </div>
                </div>
            )
        } else {
            var imgSrc = '/gallery/' + this.props.src;

            return (
                <div className={outerClassName}>
                    <h1>Lorem Ipsum</h1>
                    <div className="content">
                        Etiam placerat porttitor nunc, vel vehicula felis. Cras non dolor a lectus dignissim luctus et vitae tortor.
                        Aliquam non libero imperdiet, interdum mi quis, dignissim ipsum. Nam mauris ipsum, euismod et rhoncus eu,
                        tincidunt a turpis. Nulla iaculis egestas arcu sed convallis. Nullam pellentesque, nunc eu accumsan
                        fringilla, urna nisi facilisis sapien,
                        in eleifend urna tellus non libero. Quisque sit amet finibus neque, eget condimentum nisi.
                    </div>
                    <img src={imgSrc}/>
                    <h6>{this.props.description}</h6>
                </div>
            )
        }
    }
});

module.exports = Preview;
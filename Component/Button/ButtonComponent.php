<?php

namespace XVEngine\Bundle\ButtonBundle\Component\Button;
use XVEngine\Core\Component\AbstractComponent;


/**
 * Class ButtonComponent
 * @author Krzysztof Bednarczyk
 * @package Tattool\Bundle\ComponentsBundle\Component\Button
 */
class ButtonComponent extends AbstractComponent {


    /**
     * @author Krzysztof Bednarczyk
     */
    public function initialize() {
        $this->setComponentName('button.buttonComponent');
    }


    /**
     * Set label to this input. Allowed is html
     *
     * @author Krzysztof Bednarczyk
     * @param $text
     * @return $this
     */
    public function setText($text) {
        $this->setParam('text', $text);
        return $this;
    }


    /**
     * Method disable or enable this button
     *
     * @author Krzysztof Bednarczyk
     * @param bool $value
     * @return $this
     */
    public function disable($value = true) {
        $this->setParam("disable", $value);
        return $this;
    }


    /**
     * Method fill href attribute of button. Used for SEO etc.
     *
     * @author Krzysztof Bednarczyk
     * @param $url
     * @return $this
     */
    public function setUrl($url) {
        $this->setParam("url", $url);
        return $this;
    }

    /**
     * When is false, then will be executed url passed by setUrl method
     *
     * @author Krzysztof Bednarczyk
     * @param bool $val
     * @return $this
     */
    public function stopPropagation($val = true) {
        $this->setParam("stopPropagation", !!$val);
        return $this;
    }


    /**
     * Set tip to this component
     *
     * @author Krzysztof Bednarczyk
     * @param $tip
     * @return $this
     */
    public function setTip($tip){
        $this->setParam("tip", $tip);
        return $this;
    }

}

<?php

namespace XVEngine\Bundle\ButtonBundle\Component\Button;


/**
 * Class ButtonIconComponent
 * @author Krzysztof Bednarczyk
 * @package Tattool\Bundle\ComponentsBundle\Component\Button
 */
class ButtonIconComponent extends ButtonComponent {

    /**
     * @author Krzysztof Bednarczyk
     */
    public function initialize() {
        $this->setComponentName('button.buttonIconComponent');
    }


    /**
     *
     * @author Krzysztof Bednarczyk
     * @param string $icon
     * @return $this
     */
    public function setIcon($icon) {
        $this->setParam('icon', $icon);
        return $this;
    }


    /**
     * Set tip to this component
     *
     * @author Krzysztof Bednarczyk
     * @param string $text
     * @return $this
     */
    public function setTip($text) {
        $this->setParam('tip', $text);
        return $this;
    }


    /**
     * Set button value
     *
     * @author Krzysztof Bednarczyk
     * @param bool $value
     * @return $this
     */
    public function setActive($value = true) {
        $this->setParam('active', $value);
        return $this;
    }


}

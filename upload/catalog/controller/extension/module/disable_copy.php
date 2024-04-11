<?php
class ControllerExtensionModuleDisableCopy extends Controller {
    public function index() {
        $this->load->language('extension/module/disable_copy');

        $data['heading_title'] = $this->language->get('heading_title');

        $data['javascript'] = $this->document->addScript('catalog/view/javascript/disable_copy.js');

        return $this->load->view('extension/module/disable_copy', $data);
    }
}

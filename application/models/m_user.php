<?php
defined('BASEPATH') or exit('No direct script access allowed');

class M_user extends CI_Model
{
    public function getAllUser()
    {   
        $query = $this->db->get("tbl_user");
        
        $result = $query->result_array();
    
        return $result;
    }

    public function getUserbyId($user_id)
    {   
        $this->db->where('user_id', $user_id);
        $query = $this->db->get('tbl_user');

        $result = $query->row_array();
    
        return $result;
    }

    public function addUser()
    {      
        $data = [
            'user_fullname' => $this->input->post('user_fullname'),
            'user_uid' => $this->input->post('user_uid'),
            'user_email' => $this->input->post('user_email'),
            'user_password' => sha1($this->input->post('user_password')),
            'user_role_id' => $this->input->post('user_role_id'),
            'user_pic' => 'default.png',
            'user_is_active' => '1',
            'user_joindate' => time(),
        ];
        
        $this->db->insert('tbl_user', $data);

    }

    public function deleteUserbyId($user_id)
    {
        $this->db->where('user_id', $user_id);
        $this->db->delete('tbl_user');

    }

    public function updateUserbyId($user_id)
    {   
        
        $data = [
            'user_fullname' => $this->input->post('user_fullname'),
            'user_uid' => $this->input->post('user_uid'),
            'user_email' => $this->input->post('user_email'),
            'user_role_id' => $this->input->post('user_role_id'),
        ];

        $this->db->where('user_id', $user_id);
        $this->db->update('tbl_user', $data);
    }
}
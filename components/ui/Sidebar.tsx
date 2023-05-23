import {useContext} from 'react';
import { Box, Drawer, List, Typography, ListItem,ListItemIcon, ListItemText, Divider } from '@mui/material';

import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { UIContext } from '../../context/ui';

const menuItems : string[]  = ['Inbox', 'Starred', 'Send Email', 'Draft' ]

export const Sidebar = () => {

    const {sidemenuOpen, openSideMenu, closeSideMenu} = useContext(UIContext);
  return (
    <Drawer
        anchor='left'
        open={ sidemenuOpen }
        onClose={ closeSideMenu }
        >
            <Box width={
                250
            }>

                <Box sx={{padding: '5px 10px'}}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>

                    <Typography variant="h5">
                        Menú
                    </Typography>
                    <CloseOutlinedIcon
                     
                        onClick={closeSideMenu}
                        />
                    </Box>
                    

                    <List>
                        {menuItems.map((text, i) => (
                        < ListItem key={text}>

                            <ListItemIcon>
                                {i % 2  ? <InboxOutlinedIcon/> : <MailOutlinedIcon/>}
                            </ListItemIcon>
                            <ListItemText primary={text}/>
                                
                            

                        </ListItem>
                        ) )}
                    </List>

                </Box>

                <Divider/>
                <Box sx={{padding: '5px 10px'}}>
                    <Typography variant="h5">
                        Menú
                    </Typography>

                    <List>
                        {menuItems.map((text, i) => (
                        < ListItem key={text}>

                            <ListItemIcon>
                                {i % 2  ? <InboxOutlinedIcon/> : <MailOutlinedIcon/>}
                            </ListItemIcon>
                            <ListItemText primary={text}/>
                                
                            

                        </ListItem>
                        ) )}
                    </List>

                </Box>

                <Divider/>
            </Box>
    </Drawer>
  )
}

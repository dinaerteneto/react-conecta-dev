import React, { useRef, useState } from "react";
import { SvgIcon, IconButton, Popover, Typography, Box, Switch, FormControlLabel } from "@material-ui/core"
import { Settings as EngineIcon } from "react-feather"
import { useSettings } from "../../../context/SettingsContext";

function Settings() {
  const ref = useRef(null);

  const [isOpen, setOpen] = useState(false)
  const handleClose = () => setOpen(false)
  const handleOpen = () => setOpen(true)

  const { settings, saveSettings } = useSettings()
  const handleSwitch = () => {
    saveSettings({ darkMode: !settings.darkMode })
  }

  return (
    <>
      <IconButton ref={ref} onClick={handleOpen}>
        <SvgIcon>
          <EngineIcon />
        </SvgIcon>
      </IconButton>
      <Popover
        onClose={handleClose}
        open={isOpen}
        anchorEl={ref.current}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
      >
        <Box p={3}>
          <Typography variant="h6" color="textPrimary">
            Configurações
          </Typography>
          <FormControlLabel
            control={
              <Switch
                checked={settings.darkMode}
                onChange={handleSwitch}
                name="settings-darkMode"
                color="primary"
              />
            }
            label="Modo escuro"
          />
        </Box>
      </Popover>
    </>
  )

}

export default Settings
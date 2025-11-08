import type { PaletteMode } from "@mui/material";
import { alpha, createTheme } from "@mui/material/styles";
import type { ThemeOptions } from "@mui/material/styles";

const glassGradients = (mode: PaletteMode) => {
const isLight = mode === "light";

return {
drawer: isLight
? `linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 249, 250, 0.9) 25%, rgba(240, 242, 245, 0.85) 50%, rgba(232, 235, 240, 0.8) 75%, rgba(225, 230, 235, 0.75) 100%),
         radial-gradient(circle at 20% 80%, rgba(255, 153, 0, 0.1) 0%, transparent 50%),
         radial-gradient(circle at 80% 20%, rgba(35, 47, 62, 0.08) 0%, transparent 50%),
         linear-gradient(45deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)`
: `linear-gradient(135deg, rgba(5, 7, 12, 0.96) 0%, rgba(9, 11, 18, 0.94) 45%, rgba(12, 14, 22, 0.92) 100%),
         radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.08) 0%, transparent 55%),
         radial-gradient(circle at 15% 85%, rgba(255, 255, 255, 0.05) 0%, transparent 55%),
         linear-gradient(45deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.015) 100%)`,
appBar: isLight
? `linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 249, 250, 0.9) 50%, rgba(240, 242, 245, 0.85) 100%),
         radial-gradient(circle at 10% 50%, rgba(255, 153, 0, 0.08) 0%, transparent 55%),
         radial-gradient(circle at 90% 50%, rgba(35, 47, 62, 0.06) 0%, transparent 55%)`
: `linear-gradient(135deg, rgba(8, 11, 18, 0.95) 0%, rgba(10, 13, 20, 0.93) 55%, rgba(12, 15, 24, 0.9) 100%),
         radial-gradient(circle at 14% 48%, rgba(255, 255, 255, 0.07) 0%, transparent 60%),
         radial-gradient(circle at 88% 52%, rgba(255, 255, 255, 0.04) 0%, transparent 60%)`,
card: isLight
? `linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 249, 250, 0.9) 25%, rgba(240, 242, 245, 0.85) 50%, rgba(232, 235, 240, 0.8) 75%, rgba(225, 230, 235, 0.75) 100%),
         radial-gradient(circle at 30% 70%, rgba(255, 153, 0, 0.08) 0%, transparent 60%),
         radial-gradient(circle at 70% 30%, rgba(35, 47, 62, 0.06) 0%, transparent 60%),
         linear-gradient(45deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)`
: `linear-gradient(135deg, rgba(12, 14, 22, 0.92) 0%, rgba(10, 12, 20, 0.9) 25%, rgba(8, 10, 18, 0.88) 55%, rgba(7, 9, 16, 0.86) 100%),
         radial-gradient(circle at 32% 68%, rgba(255, 255, 255, 0.07) 0%, transparent 60%),
         radial-gradient(circle at 72% 30%, rgba(255, 255, 255, 0.04) 0%, transparent 60%),
         linear-gradient(45deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.02) 100%)`,
paper: isLight
? `linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 249, 250, 0.9) 50%, rgba(240, 242, 245, 0.85) 100%),
         radial-gradient(circle at 20% 80%, rgba(255, 153, 0, 0.06) 0%, transparent 50%),
         radial-gradient(circle at 80% 20%, rgba(35, 47, 62, 0.04) 0%, transparent 50%)`
: `linear-gradient(135deg, rgba(7, 9, 16, 0.94) 0%, rgba(9, 11, 18, 0.92) 50%, rgba(6, 8, 14, 0.9) 100%),
         radial-gradient(circle at 22% 82%, rgba(255, 255, 255, 0.06) 0%, transparent 55%),
         radial-gradient(circle at 78% 18%, rgba(255, 255, 255, 0.03) 0%, transparent 55%)`,
divider: isLight
? "linear-gradient(90deg, transparent, rgba(231, 231, 231, 0.5), transparent)"
: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.12), transparent)",
};
};

const getThemeOptions = (mode: PaletteMode): ThemeOptions => {
const isLight = mode === "light";
const gradients = glassGradients(mode);
const textPrimary = isLight ? "#0F1111" : "#F5F7FA";
const textSecondary = isLight ? "#565959" : "#9CA3AF";
const dividerColor = isLight ? "#E7E7E7" : alpha("#FFFFFF", 0.12);

return {
palette: {
mode,
primary: {
main: "#FF9900",
light: "#FFB84D",
dark: "#E47911",
contrastText: isLight ? "#000000" : "#0B0D12",
},
secondary: {
main: isLight ? "#232F3E" : "#161616",
light: isLight ? "#37475A" : "#232323",
dark: isLight ? "#131921" : "#0B0B0B",
contrastText: "#FFFFFF",
},
background: {
default: isLight ? "#FFFFFF" : "#000000",
paper: isLight ? "#F8F9FA" : "#0A0A0A",
},
text: {
primary: textPrimary,
secondary: textSecondary,
},
success: {
main: "#00A650",
light: "#2AD07C",
dark: "#007638",
contrastText: "#FFFFFF",
},
warning: {
main: "#FF9900",
light: "#FFB84D",
dark: "#E47911",
contrastText: "#0F1111",
},
error: {
main: "#FF3B3B",
light: "#FF6B6B",
dark: "#C40000",
contrastText: "#FFFFFF",
},
info: {
main: "#1E88E5",
light: "#63A4FF",
dark: "#1565C0",
contrastText: "#FFFFFF",
},
divider: dividerColor,
},
typography: {
fontFamily:
'"Inter", "Amazon Ember", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
h1: {
fontSize: "2.5rem",
fontWeight: 700,
lineHeight: 1.2,
background: "linear-gradient(135deg, #FF9900 0%, #E47911 100%)",
WebkitBackgroundClip: "text",
WebkitTextFillColor: "transparent",
backgroundClip: "text",
},
h2: {
fontSize: "2rem",
fontWeight: 600,
lineHeight: 1.3,
background: "linear-gradient(135deg, #FF9900 0%, #E47911 100%)",
WebkitBackgroundClip: "text",
WebkitTextFillColor: "transparent",
backgroundClip: "text",
},
h3: {
fontSize: "1.75rem",
fontWeight: 600,
lineHeight: 1.4,
color: textPrimary,
},
h4: {
fontSize: "1.5rem",
fontWeight: 600,
lineHeight: 1.4,
color: textPrimary,
},
h5: {
fontSize: "1.25rem",
fontWeight: 600,
lineHeight: 1.4,
color: textPrimary,
},
h6: {
fontSize: "1.125rem",
fontWeight: 600,
lineHeight: 1.4,
color: textPrimary,
},
body1: {
fontSize: "1rem",
lineHeight: 1.6,
color: textPrimary,
},
body2: {
fontSize: "0.875rem",
lineHeight: 1.6,
color: textSecondary,
},
button: {
textTransform: "none" as const,
fontWeight: 600,
fontSize: "0.875rem",
},
caption: {
fontSize: "0.75rem",
fontWeight: 500,
color: textSecondary,
},
overline: {
fontSize: "0.75rem",
fontWeight: 600,
textTransform: "uppercase" as const,
letterSpacing: "0.1em",
color: textSecondary,
},
},
shape: {
borderRadius: 16,
},
components: {
MuiDrawer: {
styleOverrides: {
paper: {
background: gradients.drawer,
backdropFilter: "blur(20px) saturate(180%)",
borderRight: isLight
? "1px solid rgba(255, 255, 255, 0.2)"
: "1px solid rgba(255, 255, 255, 0.08)",
boxShadow: isLight
? "0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2), inset 0 -1px 0 rgba(0, 0, 0, 0.05)"
: "0 16px 48px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.06), inset 0 -1px 0 rgba(0, 0, 0, 0.3)",
position: "relative",
"&::before": {
content: '""',
position: "absolute",
top: 0,
left: 0,
right: 0,
bottom: 0,
background: isLight
? `linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.1) 50%, transparent 100%)`
: `linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.08) 50%, transparent 100%)`,
pointerEvents: "none",
zIndex: 1,
},
},
},
},
MuiAppBar: {
styleOverrides: {
root: {
background: gradients.appBar,
backdropFilter: "blur(20px) saturate(180%)",
borderBottom: isLight
? "1px solid rgba(255, 255, 255, 0.2)"
: "1px solid rgba(255, 255, 255, 0.08)",
boxShadow: isLight
? `0 4px 20px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.2)`
: `0 8px 24px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.05)`,
},
},
},
MuiButton: {
styleOverrides: {
root: {
borderRadius: 12,
padding: "12px 24px",
fontWeight: 600,
textTransform: "none",
transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
position: "relative",
overflow: "hidden",
"&::before": {
content: '""',
position: "absolute",
top: 0,
left: "-100%",
width: "100%",
height: "100%",
background:
"linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.24), transparent)",
transition: "left 0.5s",
},
"&:hover::before": {
left: "100%",
},
},
contained: {
background: "linear-gradient(135deg, #FF9900 0%, #E47911 100%)",
boxShadow: isLight
? "0 8px 25px rgba(255, 153, 0, 0.3)"
: "0 12px 32px rgba(255, 153, 0, 0.45)",
"&:hover": {
background: "linear-gradient(135deg, #E47911 0%, #D2691E 100%)",
boxShadow: isLight
? "0 12px 35px rgba(255, 153, 0, 0.4)"
: "0 18px 40px rgba(255, 153, 0, 0.55)",
transform: "translateY(-2px)",
},
},
outlined: {
border: "2px solid",
borderImage: "linear-gradient(135deg, #FF9900 0%, #E47911 100%) 1",
background: isLight
? "linear-gradient(135deg, rgba(255, 153, 0, 0.05) 0%, rgba(228, 121, 17, 0.05) 100%)"
: "linear-gradient(135deg, rgba(255, 153, 0, 0.12) 0%, rgba(228, 121, 17, 0.12) 100%)",
"&:hover": {
background: isLight
? "linear-gradient(135deg, rgba(255, 153, 0, 0.1) 0%, rgba(228, 121, 17, 0.1) 100%)"
: "linear-gradient(135deg, rgba(255, 153, 0, 0.18) 0%, rgba(228, 121, 17, 0.18) 100%)",
transform: "translateY(-1px)",
},
},
text: {
background: "linear-gradient(135deg, #FF9900 0%, #E47911 100%)",
WebkitBackgroundClip: "text",
WebkitTextFillColor: "transparent",
backgroundClip: "text",
"&:hover": {
background: "linear-gradient(135deg, #E47911 0%, #D2691E 100%)",
WebkitBackgroundClip: "text",
WebkitTextFillColor: "transparent",
backgroundClip: "text",
},
},
},
},
MuiCard: {
styleOverrides: {
root: {
background: gradients.card,
backdropFilter: "blur(20px) saturate(180%)",
border: isLight
? "1px solid rgba(255, 255, 255, 0.2)"
: "1px solid rgba(255, 255, 255, 0.08)",
borderRadius: 20,
boxShadow: isLight
? `0 8px 32px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.2), inset 0 -1px 0 rgba(0, 0, 0, 0.05)`
: `0 20px 48px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.04), inset 0 -1px 0 rgba(0, 0, 0, 0.3)`,
transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
position: "relative",
"&::before": {
content: '""',
position: "absolute",
top: 0,
left: 0,
right: 0,
bottom: 0,
background: isLight
? `linear-gradient(45deg, transparent 0%, rgba(255, 255, 255, 0.1) 50%, transparent 100%)`
: `linear-gradient(45deg, transparent 0%, rgba(255, 255, 255, 0.06) 50%, transparent 100%)`,
borderRadius: 20,
pointerEvents: "none",
zIndex: 1,
},
"&:hover": {
transform: "translateY(-4px)",
boxShadow: isLight
? `0 16px 48px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.3), inset 0 -1px 0 rgba(0, 0, 0, 0.05)`
: `0 24px 60px rgba(0, 0, 0, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.06), inset 0 -1px 0 rgba(0, 0, 0, 0.35)`,
"&::before": {
background: isLight
? `linear-gradient(45deg, transparent 0%, rgba(255, 255, 255, 0.15) 50%, transparent 100%)`
: `linear-gradient(45deg, transparent 0%, rgba(255, 255, 255, 0.1) 50%, transparent 100%)`,
},
},
},
},
},
MuiPaper: {
styleOverrides: {
root: {
background: gradients.paper,
backdropFilter: "blur(20px) saturate(180%)",
border: isLight
? "1px solid rgba(255, 255, 255, 0.2)"
: "1px solid rgba(255, 255, 255, 0.08)",
borderRadius: 16,
position: "relative",
"&::before": {
content: '""',
position: "absolute",
top: 0,
left: 0,
right: 0,
bottom: 0,
background: isLight
? `linear-gradient(135deg, transparent 0%, rgba(255, 255, 255, 0.08) 50%, transparent 100%)`
: `linear-gradient(135deg, transparent 0%, rgba(255, 255, 255, 0.06) 50%, transparent 100%)`,
borderRadius: 16,
pointerEvents: "none",
zIndex: 1,
},
},
elevation1: {
boxShadow: isLight
? `0 4px 20px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.2)`
: `0 10px 32px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.05)`,
},
elevation2: {
boxShadow: isLight
? `0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)`
: `0 16px 40px rgba(0, 0, 0, 0.55), inset 0 1px 0 rgba(255, 255, 255, 0.05)`,
},
elevation3: {
boxShadow: isLight
? `0 12px 48px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.2)`
: `0 20px 60px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.05)`,
},
},
},
MuiTextField: {
styleOverrides: {
root: {
"& .MuiOutlinedInput-root": {
borderRadius: 12,
background: isLight
? "rgba(255, 255, 255, 0.8)"
: "rgba(17, 22, 31, 0.85)",
backdropFilter: "blur(10px)",
border: isLight
? "1px solid rgba(231, 231, 231, 0.5)"
: "1px solid rgba(255, 255, 255, 0.08)",
transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
"&:hover": {
border: isLight
? "1px solid rgba(255, 153, 0, 0.3)"
: "1px solid rgba(255, 153, 0, 0.5)",
background: isLight
? "rgba(255, 255, 255, 0.9)"
: "rgba(20, 25, 36, 0.9)",
},
"&.Mui-focused": {
border: "2px solid",
borderImage:
"linear-gradient(135deg, #FF9900 0%, #E47911 100%) 1",
background: isLight
? "rgba(255, 255, 255, 0.95)"
: "rgba(18, 23, 33, 0.95)",
boxShadow: isLight
? "0 0 0 4px rgba(255, 153, 0, 0.1)"
: "0 0 0 6px rgba(255, 153, 0, 0.15)",
},
},
},
},
},
MuiChip: {
styleOverrides: {
root: {
borderRadius: 20,
fontWeight: 600,
background: isLight
? "linear-gradient(135deg, rgba(255, 153, 0, 0.1) 0%, rgba(228, 121, 17, 0.1) 100%)"
: "linear-gradient(135deg, rgba(255, 153, 0, 0.18) 0%, rgba(228, 121, 17, 0.18) 100%)",
border: isLight
? "1px solid rgba(255, 153, 0, 0.2)"
: "1px solid rgba(255, 153, 0, 0.35)",
"&:hover": {
background: isLight
? "linear-gradient(135deg, rgba(255, 153, 0, 0.15) 0%, rgba(228, 121, 17, 0.15) 100%)"
: "linear-gradient(135deg, rgba(255, 153, 0, 0.24) 0%, rgba(228, 121, 17, 0.24) 100%)",
transform: "translateY(-1px)",
},
},
},
},
MuiListItem: {
styleOverrides: {
root: {
borderRadius: 12,
marginBottom: 4,
transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
},
},
},
MuiListItemButton: {
styleOverrides: {
root: {
borderRadius: 12,
transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
"&:hover": {
background: alpha("#FF9900", isLight ? 0.12 : 0.2),
transform: "translateX(4px)",
},
"&.Mui-selected": {
background: alpha("#FF9900", isLight ? 0.15 : 0.24),
border: `1px solid ${alpha("#FF9900", isLight ? 0.3 : 0.45)}`,
boxShadow: `0 4px 20px ${alpha("#FF9900", isLight ? 0.2 : 0.35)}`,
},
},
},
},
MuiDivider: {
styleOverrides: {
root: {
background: gradients.divider,
height: 1,
},
},
},
MuiAvatar: {
styleOverrides: {
root: {
background: "linear-gradient(135deg, #FF9900 0%, #E47911 100%)",
boxShadow: isLight
? "0 4px 16px rgba(255, 153, 0, 0.3)"
: "0 6px 20px rgba(255, 153, 0, 0.45)",
},
},
},
MuiCircularProgress: {
styleOverrides: {
root: {
color: "#FF9900",
},
circle: {
strokeLinecap: "round",
},
},
},
MuiLinearProgress: {
styleOverrides: {
root: {
borderRadius: 10,
backgroundColor: alpha("#FF9900", isLight ? 0.1 : 0.24),
},
bar: {
borderRadius: 10,
background: "linear-gradient(90deg, #FF9900 0%, #E47911 100%)",
},
},
},
},
} as ThemeOptions;
};

export const createAppTheme = (mode: PaletteMode) =>
createTheme(getThemeOptions(mode));

//{ loginEmail: 'w@w', loginPassword: '1213131' }

export const checkUser = (req, res) => {
  console.log('serialized user ->', req.session);
  res.status(200).json({ message: "Logged in successfully" });
}

export const checkAuthenticated = (req, res) => {
  res.json({ authenticated: true });
}

export const logoutUser = (req, res) => {
  req.logout((err) => {
    if (err) {
      console.error('Error logging out:', err);
      return res.status(500).json({ message: "Error logging out" });
    }
    console.log("logged out successfully.");
    return res.status(200).json({ message: "Logout successful" });
  });
}

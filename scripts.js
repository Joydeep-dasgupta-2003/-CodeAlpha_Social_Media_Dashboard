let sidebarOpen = false;

  // Get the sidebar element
  const sidebar = document.getElementById('sidebar');

  // Function to open the sidebar
  function openSidebar() {
    if (!sidebarOpen) {
      sidebar.classList.add('sidebar-responsive');
      sidebarOpen = true;
    }
  }

  // Function to close the sidebar
  function closeSidebar() {
    if (sidebarOpen) {
      sidebar.classList.remove('sidebar-responsive');
      sidebarOpen = false;
    }
  }

  // Toggle the sidebar when clicking on the hamburger icon
  document.getElementById('sidebar-title').addEventListener('click', function() {
    if (!sidebarOpen) {
      openSidebar();
    } else {
      closeSidebar();
    }
  });